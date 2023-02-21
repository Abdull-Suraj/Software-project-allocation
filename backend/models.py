from exts import db


class Schedule(db.Model):
    ids=db.Column(db.Integer(),primary_key=True)
    names= db.Column(db.String(), nullable=False)
    created=db.Column(db.String(), nullable=False)
    cost=db.Column(db.Float(), nullable=False)
    duration=db.Column(db.Float(), nullable=False)

    #pass



    def __repr__(self):
        return f"<Schedule {self.names} >"

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def update(self,names):
        self.name=names


#user model
class User(db.Model):
    ids=db.Column(db.Integer(),primary_key=True)
    username= db.Column(db.String(25), nullable=False, unique=True)
    email=db.Column(db.String(80), nullable=False)
    password=db.Column(db.Text(), nullable=False)

    #pass
    def __repr__(self):
        return f"<Schedule {self.username} >"

class Users(db.Model):
    ids=db.Column(db.Integer(),primary_key=True)
    username= db.Column(db.String(25), nullable=False, unique=True)
    email=db.Column(db.String(80), nullable=False)
    password=db.Column(db.Text(), nullable=False)

    #pass
    def __repr__(self):
        return f"<Schedule {self.username} >"
    
    def save(self):
        db.session.add(self)
        db.session.commit()