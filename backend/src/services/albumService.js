const Album = require('../models/Album.js');

exports.getAll = () => Album.find();
exports.getOne = (id) => Album.findById(id);
exports.getOwn = (userId) => Album.find({_ownerId: userId});
exports.create = (albumData) => Album.create(albumData);
exports.update = (ablumId,albumData) => Album.findByIdAndUpdate(ablumId,albumData);
exports.delete = (ablumId) => Album.findByIdAndDelete(ablumId)
