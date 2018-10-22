const nameSchema = new Schema(
  {
    name: { type: String }
  }, {
    timestamps: true
  }
);

var newName = new nameSchema({ name: 'Charlotte' });

newName.save(function (err) {
  if (err) return handleError(err);

});
