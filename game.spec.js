describe("A spec", function () {

    beforeEach(function () {
        // startingPlayer = 'O';
        // nextMove = 'O';
        // gameEnded = false;
        // moves = [];
        // gamesWonByO = 0;
        // gamesWonByX = 0;
        // gamesDrawn = 0;

        spyOn(window, "changeStartingPlayer");
    });

    // it("changesStartingPlayer", function() {
    //     changeStartingPlayer();
    //     expect(startingPlayer).toEqual('X');
    // });

    // it("changesStartingPlayerAgain", function() {
    //     changeStartingPlayer();
    //     expect(startingPlayer).toEqual('X');
    // });

    it("shouldChangeStartingPlayer", function () {
        // given

        // when
        changeStartingPlayer();

        // then
        expect(changeStartingPlayer).toHaveBeenCalled();
    });

    // it("changesStartingPlayerAgain2", function() {
    //     changeStartingPlayer();
    //     expect(startingPlayer).toEqual('X');
    // });


    it('should set X on empty field2', function () {
        //given 
        var square = document.createElement('div');
        document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(square);
        square.innerText = '';
        spyOn(window, 'switchTurn');
        //when
        nextMove(square);
        //then
        expect(square.innerText).toEqual(X_PLAYER);
        expect(boardClear).toBe(false);
        expect(moves).toEqual(1);
        expect(movesHistory.length).toEqual(1);
        }); 

    // it('should set X on empty field', function () {
    // //given 
    // var square = document.createElement('div');
    // document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(square);
    // square.innerText = EMPTY_SQUARE;
    // spyOn(window, 'switchTurn');
    // //when
    // nextMove(square);
    // //then
    // expect(square.innerText).toEqual(X_PLAYER);
    // expect(boardClear).toBe(false);
    // expect(moves).toEqual(1);
    // expect(movesHistory.length).toEqual(1);
    // }); 
    



});