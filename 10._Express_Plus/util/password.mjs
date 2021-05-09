import bcrypt from 'bcrypt';

const saltRounds = 12;
const plainTextPassword = 'keapass123';
const wrongTextPassword = 'happyDog';

const hashedPassword = '$2b$12$VbVZFu8k4hTcIx9A94Ojz.TKLXzSjcWazDdPfqHzIAp6qKmAUOG92';

bcrypt.hash(plainTextPassword, saltRounds, (error, hash) => {
    console.log(hash);
});

bcrypt.compare(plainTextPassword, hashedPassword, (error, result) => {
    console.log(result);
});

bcrypt.compare(wrongTextPassword, hashedPassword, (error, result) => {
    console.log(result);
});

console.log('test');
export default {};