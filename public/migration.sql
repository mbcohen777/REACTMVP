DROP TABLE IF EXISTS dead_people;
DROP TABLE IF EXISTS quotes;

CREATE TABLE dead_people (
    id SERIAL PRIMARY KEY,
    person_name TEXT
    );

CREATE TABLE quotes (
    id SERIAL PRIMARY KEY,
    quote TEXT,
    original_language TEXT,
    person_name TEXT
     );

INSERT INTO dead_people (person_name) VALUES ('Tolkein');
INSERT INTO dead_people (person_name) VALUES ('Napoleon I');
INSERT INTO dead_people (person_name) VALUES ('Berra');


INSERT INTO quotes (quote, original_language, person_name) VALUES ('Not all who wander are lost.', 'English', 'Tolkein');
INSERT INTO quotes (quote, original_language, person_name) VALUES ('A revolution is an idea which has found its bayonets.', 'French', 'Napoleon I');
INSERT INTO quotes (quote, original_language, person_name) VALUES ('Glory is fleeting, but obscurity is forever.', 'French', 'Napoleon I');
INSERT INTO quotes (quote, original_language, person_name) VALUES ('From the sublime to the ridiculous is but a step.', 'French', 'Napoleon I');
INSERT INTO quotes (quote, original_language, person_name) VALUES ('Soldiers generally win battles; generals get credit for them.', 'French', 'Napoleon I');
INSERT INTO quotes (quote, original_language, person_name) VALUES ('The great art of governing consists in not letting men grow old in their jobs.', 'French', 'Napoleon I');
INSERT INTO quotes (quote, original_language, person_name) VALUES ('It does not do to leave a live dragon out of your calculations, if you live near him.', 'English', 'J.R.R. Tolkein');
INSERT INTO quotes (quote, original_language, person_name) VALUES ('You have nice manners for a thief and a liar, said the dragon.', 'English', 'J.R.R. Tolkein');
INSERT INTO quotes (quote, original_language, person_name) VALUES ('There are no safe paths in this part of the world. Remember you are over the Edge of the Wild now, and in for all sorts of fun wherever you go.', 'English', 'J.R.R. Tolkein');
INSERT INTO quotes (quote, original_language, person_name) VALUES ('The road goes ever on and on.', 'English', 'J.R.R. Tolkein');
INSERT INTO quotes (quote, original_language, person_name) VALUES ('When you come to a fork in the road, take it.', 'English', 'Berra');
INSERT INTO quotes (quote, original_language, person_name) VALUES ('I never said most of the things I said.', 'English', 'Berra');
INSERT INTO quotes (quote, original_language, person_name) VALUES ('You wouldn`t have won if we`d beaten you.', 'English', 'Berra');
INSERT INTO quotes (quote, original_language, person_name) VALUES (' It ain`t over till it`s over.', 'English', 'Berra');
INSERT INTO quotes (quote, original_language, person_name) VALUES ('It`s like déjà vu all over again.', 'English', 'Berra');
