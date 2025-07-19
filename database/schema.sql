CREATE TABLE users (
  id SERIAL PRIMARY KEY,                  --ID number of user
  email TEXT NOT NULL UNIQUE,             --email obvs
  password TEXT NOT NULL,                 -- password obvs
  created_at TIMESTAMP DEFAULT NOW();     --when account was created
  updated_at TIMESTAMP DEFAULT NOW();     --when account was updated if ever
  is_admin BOOLEAN DEFAULT false;         --to differentiate admin UI
  reset_token TEXT;                       --password reset
);