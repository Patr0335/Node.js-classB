import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// husk at smide i gitignore hvis der er passwords i

 const db = await open({
    filename: 'football.db',   // problem in using '/tmp/database.db' "tmp" because its temporary. 
                                    // tmp is in linux. this wont work on windows. 
    driver: sqlite3.Database
  })
  
export default db;