from psycopg2 import sql

import persistence

@persistence.connection_handler
def insert_new_user(cursor, username, password):
    cursor.execute(
        sql.SQL("""
                    INSERT INTO users (username, password)
                    VALUES (%(username)s, %(password)s);
                """), {'username': username, 'password': password}
                )


@persistence.connection_handler
def check_if_user_in_databse(cursor, username):
    cursor.execute(
        sql.SQL("""
                    SELECT username FROM users
                    WHERE username = %(username)s;
                """), {'username': username}
                )
    username = cursor.fetchall()
    return username

@persistence.connection_handler
def get_user_password(cursor, username):
    cursor.execute(
        sql.SQL("""
                    SELECT password FROM users
                    WHERE username = %(username)s;
                """), {'username': username}
                )
    password = cursor.fetchall()
    return password