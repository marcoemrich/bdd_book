var ThreeLetterDiscount = {
    forSeminar: function(seminar) {
        return Object.create(this).init(seminar);
    },

    init: function(seminar) {
        this._seminar = seminar;
        return this;
    },

    seminar: function() { return this._seminar;},
    granted: function() { return this._seminar.name().length < 3; }, // <=

    value: function() { return this.percentage() / 100 * this._seminar.originalPrice();},

    percentage: function() { return this.granted() ? 5 : 0; }
};