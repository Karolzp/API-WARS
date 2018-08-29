import server
import data_manager

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
