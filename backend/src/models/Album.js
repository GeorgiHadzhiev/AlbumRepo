const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({

    name:{

        type: String

    },
    composerArtist:{

        type: String

    },
    date:{

        type: Number

    },
    numberOfSongs:{

        type: Number

    },
    genre: {

        type: String

    },
    tracklist:{

        type: String

    },
    description:{

        type: String

    },
    personnel:{

        type: String

    },
    imageURL:{

        type: String

    },
    _ownerId:{

        type: mongoose.Types.ObjectId,
        ref: 'User'

    },
    likes:{

        type: Array

    },
    dislikes:{

        type: Array

    }

});

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;