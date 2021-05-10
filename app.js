const cors = require('cors');
const express = require('express');
const app = express();



app.use(cors());

/** Routes */
app.get('/api/invitations', (req, res, next) => {
    try {
        const { query } = req;
        const { data } = query;
        const invitations = require('./invitations.json');
        const invitations_update = require('./invitations_update.json');
        return res.json(data === 'invitations' ? invitations : invitations_update);
    } catch(err) {
        console.error('err', err);
        next(err);
    }
});

/** Error Handler */
app.use((err, req, res, next) => {
    if(err) res.status(500).json(err.message);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is listening at ${PORT}`));