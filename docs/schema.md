# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null

## cards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
deck_id   | integer   | not null, foreign key (references users), indexed
question    | string    | not null
answer      | string    | not null

## decks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
subject_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    |

## subjects
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
author_id   | integer   | not null, foreign key (references users), indexed
