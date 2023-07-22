DROP TABLE IF EXISTS ARTS;
CREATE TABLE IF NOT EXISTS Arts(
  id serial primary key,
  title varchar(200),
  artist varchar(200),
  image BYTEA,
  description varchar(400),
  place varchar(200),
  comment varchar(200)
);