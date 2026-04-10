import express from 'express';
import cors from 'cors';

const app = express();

const PORT = 5000;

app.use(cors());

const items = [
    "Apple", "Banana", "Blueberry", "Cherry", "Date", 
    "Elderberry", "Fig", "Grape", "Honeycrisp", "Iceberg Lettuce"
];
app.get('/search' , (req, res) => {
    const query = req.query.q?.toLowerCase() || '';
    console.log('searching  for', query);

    const result = items.filter(items => items.toLowerCase().includes(query));
    res.json(result);
})
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });