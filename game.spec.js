describe("gameTests", function () {

    afterEach(function () {
        startingPlayer = signO;
        nextMove = signO;
        gameEnded = false;
        moves = [];
        gamesWonByO = 0;
        gamesWonByX = 0;
        gamesDrawn = 0;
        board = ['','','','','','','','',''];
    });

    it('shouldFillFieldAfterCellClicked',  function  () {
        //given 
        var  square  =  document.createElement('td');
        document.getElementById  =  jasmine.createSpy('HTML Element').and.returnValue(square);
        square.innerHTML  =  '';
        square.id = "11";
        spyOn(window, 'changeNextMove');
        spyOn(window, 'addIdToMoves');
        spyOn(window, 'changeGameStatus');
        spyOn(window, 'updateStats');

        //when
        cellClicked(square);

        //then
        expect(square.innerHTML).toEqual(signO);
    });

    it('shouldAddIdToMoves',  function  () {
        //given 
        var idToTest = "20";

        //when
        addIdToMoves(idToTest);

        //then
        expect(moves[0]).toEqual("20");
        expect(moves.length).toEqual(1);
    });

    it('shouldChangeGameStatusText',  function  () {
        //given 
        var dummy = document.createElement('div');
        document.getElementById  =  jasmine.createSpy('HTML Element').and.returnValue(dummy);
        var textToTest = "test";

        //when
        changeGameStatus(textToTest);

        //then
        expect(dummy.innerHTML).toEqual(textToTest);
    });

    it('shouldFillFieldWithSign',  function  () {
        //given 
        var dummy = document.createElement('td');
        document.getElementById  =  jasmine.createSpy('HTML Element').and.returnValue(dummy);

        //when
        fillFieldWithSign(dummy);

        //then
        expect(dummy.innerHTML).toEqual(signO);
        expect(dummy.classList.contains("colorO")).toEqual(true);
    });

    it('shouldAddPointToCurrentPlayerCurrentPlayerIsO',  function  () {
        //given 

        //when
        addPointToCurrentPlayer();

        //then
        expect(gamesWonByO).toEqual(1);
        expect(gamesWonByX).toEqual(0);
        expect(gamesDrawn).toEqual(0);
    });

    it('shouldAddPointToCurrentPlayerWhenCurrentPlayerIsX',  function  () {
        //given 
        nextMove = signX;

        //when
        addPointToCurrentPlayer();

        //then
        expect(gamesWonByO).toEqual(0);
        expect(gamesWonByX).toEqual(1);
        expect(gamesDrawn).toEqual(0);
    });

    it('shouldAddDraw',  function  () {
        //given 

        //when
        addDraw();

        //then
        expect(gamesWonByO).toEqual(0);
        expect(gamesWonByX).toEqual(0);
        expect(gamesDrawn).toEqual(1);
    });

    it('shouldResetBoard',  function  () {
        //given 
        nextMove = signX;
        gameEnded = true;
        moves = ["1","2"];
        //when
        resetBoard();

        //then
        expect(nextMove).toEqual(signO);
        expect(gameEnded).toEqual(false);
        expect(moves.length).toEqual(0);
    });

    it('shouldUndoLastMove',  function  () {
        //given 
        spyOn(window, 'changeGameStatus');

        var dummy = document.createElement('td');
        document.getElementById  =  jasmine.createSpy('HTML Element').and.returnValue(dummy);
        dummy.id = "22";
        dummy.innerHTML = signX;
        dummy.classList.add("colorX");
        moves = ["1","22"];
        //when
        undoLastMove();

        //then
        expect(dummy.innerHTML).toEqual('');
        expect(dummy.classList.contains("colorX")).toEqual(false);
        expect(nextMove).toEqual(signX);
        expect(moves.length).toEqual(1);
    });

});