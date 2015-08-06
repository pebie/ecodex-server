/**
 * Created by Pebie on 06/08/15.
 */
module.exports = function (app) {
    var Datasheets = app.models.datasheets;
    var sampleDatasheet = require('./sample-datasheets');

    app.dataSources.ecodex.autoupdate('datasheets', function (err) {
        if (err) throw err;

        var datasheets = sampleDatasheet;

        var count = datasheets.length;

        datasheets.forEach(function (datasheet) {
            Datasheets.create(datasheet, function (err, instance) {
                if (err)
                    return console.log(err);

                console.log('Datasheet created:', instance);

                count--;

                if (count === 0)
                    console.log('Done');
            });
        });
    });
};
