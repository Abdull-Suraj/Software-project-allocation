from flask import Flask, request, jsonify
from flask_restx import Resource, Namespace, fields
from flask_jwt_extended import jwt_required
from models import Schedule

schedule_ns=Namespace('schedules', description="Schedule namespace")

schedule_model=schedule_ns.model(
    "Schedule",
    {
        "ids":fields.Integer(),
        "names":fields.String(),
        "created":fields.String(),
        "cost":fields.Float(),
        "duration":fields.Float()
    }
)

@schedule_ns.route('/hello')
class HelloResource(Resource):
    def get(self):
       try:
           return {'time': "Hello World"}
       except Exception as ex:
            print(str(ex))
            return {'time': 'Hello World'}


@schedule_ns.route('/schedules')
class ScheduleResource(Resource):
    @schedule_ns.marshal_list_with(schedule_model)
    def get(self):
        schedules = Schedule.query.all()

        return schedules

    
    @schedule_ns.marshal_with(schedule_model)
    @schedule_ns.expect(schedule_model)
    @jwt_required()
    def post(self):

        data= request.get_json()
        new_schedule = Schedule(
            names=data.get('names'),
            created=data.get('created'),
            cost=data.get('cost'),
            duration=data.get('duration')
        )
        new_schedule.save()

        return new_schedule,201

@schedule_ns.route('/schedules/<int:id>')
class ScheduleResource(Resource):

    @schedule_ns.marshal_with(schedule_model)
    def get(self,id):
        schedule = Schedule.query.get_or_404(id)

        return schedule
    @schedule_ns.marshal_with(schedule_model)
    @jwt_required()
    def delete(self,id):
        del_schedule= Schedule.query.get_or_404(id)
        del_schedule.delete()
        return del_schedule
