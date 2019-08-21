--DATABASE NAME php_react

CREATE TABLE "owner"(
	id SERIAL PRIMARY KEY,
	"name" VARCHAR(200)
	);

CREATE TABLE pets(
	id SERIAL PRIMARY KEY,
	owner_id INT REFERENCES "owner",
	pet_name VARCHAR(200),
	breed VARCHAR(200),
	color VARCHAR(30),
	checked_in DATE
	);
	
INSERT INTO "owner"("name")
	VALUES('david'),('jake'),('adam'),('kyle');

INSERT INTO pets(owner_id, pet_name, breed, color)
	VALUES(1, 'percy', 'chocolate lab', 'brown'),
    (2, 'taz', 'schnauzer', 'black and white'),
    (3, 'garbage', 'maine coon', 'mainecoon-color'),
    (4, 'kyle', 'german snake', 'turquoise'),
    (1, 'esther', 'golden retriever', 'golden');