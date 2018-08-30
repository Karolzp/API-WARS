import server
import data_manager

active_user = ''

def register_new_user(register_input):
    username = register_input['username']
    password = register_input['password']
    data_manager.insert_new_user(username, password)

def check_if_user_in_database(user_input):
    username = user_input['username']
    result = data_manager.check_if_user_in_databse(username)
    if result == []:
        return False
    else:
        return True

def check_if_user_password_correct(user_input):
    username = user_input['username']
    password = user_input['password']
    password_from_database = data_manager.get_user_password(username)
    if password_from_database != []:
        if password == password_from_database[0]['password']:
            return True
    return False
