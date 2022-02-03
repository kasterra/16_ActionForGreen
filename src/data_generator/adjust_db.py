import sqlite3
from sqlite3 import Error


def create_table(conn, create_table_sql):
    try:
        c = conn.cursor()
        c.execute(create_table_sql)

    except Error as e:
        print(e)


def create_connection(db_file):
    """ create a database connection to a SQLite database """
    conn = None
    try:
        conn = sqlite3.connect(db_file)
        print(sqlite3.version)
    except Error as e:
        print(e)
    return conn


def create_iot(conn, arg):
    sql = ''' INSERT INTO iot(kind,min,max)
              VALUES(?,?,?) '''
    cur = conn.cursor()
    cur.execute(sql, arg)
    conn.commit()
    return cur.lastrowid


def delete_task(conn, id):
    sql = 'DELETE FROM projects WHERE id=?'
    cur = conn.cursor()
    cur.execute(sql, (id,))
    conn.commit()


def select_all_tasks(conn):
    cur = conn.cursor()
    cur.execute("SELECT * FROM iot")

    data = cur.fetchall()
    return data


def main():
    conn = sqlite3.connect(r"test.db")
    print(conn)
    cursor = conn.cursor()
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
    print(cursor.fetchall())
    conn = create_connection(r"test.db")
    sql_create_iot_table = """ CREATE TABLE IF NOT EXISTS iot (
                                            id integer PRIMARY KEY,
                                            kind text NOT NULL,
                                            min integer NOT NULL,
                                            max integer NOT NULL
                                        ); """
    # create_table(conn, sql_create_iot_table)
    cursor = conn.cursor()

    cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
    print(cursor.fetchall())
    # arg=('energy',100,200)
    # create_iot(conn, arg)
    select_all_tasks(conn)
    # delete_task(conn, 2)


if __name__ == '__main__':
    main()
