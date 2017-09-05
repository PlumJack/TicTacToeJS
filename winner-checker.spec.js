describe("winConditionsTests", function () {

    afterEach(function () {
        board = ['', '', '', '', '', '', '', '', ''];
    });

    it('shouldReturnTrueForSignOWhen3SignsOInAnyLine', function () {
        //given 
        board = ['O', 'O', 'O', 'X', 'X', '', '', '', ''];

        //when
        var result = checkAllWinConditions(signO);

        //then
        expect(result).toEqual(true);
    });

    it('shouldReturnTrueForSignXWhen3SignsXInAnyLine', function () {
        //given 
        board = ['X', 'X', 'X', 'O', '', 'O', 'O', '', 'O'];
        //when
        var result = checkAllWinConditions(signX);

        //then
        expect(result).toEqual(true);
    });

    it('shouldReturnForForSignOWhen3SignsOAreNotInAnyLine', function () {
        //given 
        board = ['O', 'O', '', '', 'X', '', '', '', ''];

        //when
        var result = checkAllWinConditions(signO);

        //then
        expect(result).toEqual(false);
    });

    it('shouldReturnForForSignXWhen3SignsXAreNotInAnyLine', function () {
        //given 
        board = ['O', 'O', '', '', 'X', '', '', '', ''];

        //when
        var result = checkAllWinConditions(signX);

        //then
        expect(result).toEqual(false);
    });

});

describe("specificWinConditionTests", function () {

    afterEach(function () {
        board = ['', '', '', '', '', '', '', '', ''];
    });

    it('shouldReturnTrueForSignOWhen3SignsOInLine123', function () {
        //given 
        board = ['O', 'O', 'O', 'X', 'X', '', '', '', ''];

        //when
        var result = checkWinCondition(1,2,3,signO);

        //then
        expect(result).toEqual(true);
    });

    it('shouldReturnFalseForSignOWhenNo3SignsOInLine123', function () {
        //given 
        board = ['O', 'O', '', 'X', 'X', '', '', '', ''];

        //when
        var result = checkWinCondition(1,2,3,signO);

        //then
        expect(result).toEqual(false);
    });

    it('shouldReturnTrueForSignXWhen3SignsXInLine123', function () {
        //given 
        board = ['X', 'X', 'X', 'O', '', '', '', 'O', ''];

        //when
        var result = checkWinCondition(1,2,3,signX);

        //then
        expect(result).toEqual(true);
    });

    it('shouldReturnFalseForSignOWhenNo3SignsXInLine123', function () {
        //given 
        board = ['O', 'O', '', 'X', 'X', 'X', '', '', ''];

        //when
        var result = checkWinCondition(1,2,3,signX);

        //then
        expect(result).toEqual(false);
    });

    it('shouldReturnTrueForSignOWhen3SignsOInLine456', function () {
        //given 
        board = ['X', '', '', 'O', 'O', 'O', '', '', 'X'];

        //when
        var result = checkWinCondition(4,5,6,signO);

        //then
        expect(result).toEqual(true);
    });

    it('shouldReturnFalseForSignOWhenNo3SignsOInLine456', function () {
        //given 
        board = ['O', 'O', '', 'X', 'X', '', '', '', ''];

        //when
        var result = checkWinCondition(4,5,6,signO);

        //then
        expect(result).toEqual(false);
    });

    it('shouldReturnTrueForSignXWhen3SignsXInLine456', function () {
        //given 
        board = ['O', 'O', 'X', 'X', 'X', 'X', '', 'O', ''];

        //when
        var result = checkWinCondition(4,5,6,signX);

        //then
        expect(result).toEqual(true);
    });

    it('shouldReturnFalseForSignOWhenNo3SignsXInLine456', function () {
        //given 
        board = ['O', 'O', '', 'O', 'X', 'X', '', '', ''];

        //when
        var result = checkWinCondition(4,5,6,signX);

        //then
        expect(result).toEqual(false);
    });

    it('shouldReturnTrueForSignOWhen3SignsOInLine789', function () {
        //given 
        board = ['O', '', 'X', 'X', 'X', '', 'O', 'O', 'O'];

        //when
        var result = checkWinCondition(7,8,9,signO);

        //then
        expect(result).toEqual(true);
    });

    it('shouldReturnFalseForSignOWhenNo3SignsOInLine789', function () {
        //given 
        board = ['O', 'O', '', 'X', 'X', '', 'O', '', ''];

        //when
        var result = checkWinCondition(7,8,9,signO);

        //then
        expect(result).toEqual(false);
    });

    it('shouldReturnTrueForSignXWhen3SignsXInLine789', function () {
        //given 
        board = ['X', 'O', 'O', 'O', 'O', '', 'X', 'X', 'X'];

        //when
        var result = checkWinCondition(7,8,9,signX);

        //then
        expect(result).toEqual(true);
    });

    it('shouldReturnFalseForSignOWhenNo3SignsXInLine789', function () {
        //given 
        board = ['O', 'O', '', 'X', 'O', 'X', '', '', ''];

        //when
        var result = checkWinCondition(7,8,9,signX);

        //then
        expect(result).toEqual(false);
    });

    it('shouldReturnTrueForSignOWhen3SignsOInLine147', function () {
        //given 
        board = ['O', 'X', 'X', 'O', 'X', '', 'O', '', ''];

        //when
        var result = checkWinCondition(1,4,7,signO);

        //then
        expect(result).toEqual(true);
    });

    it('shouldReturnFalseForSignOWhenNo3SignsOInLine147', function () {
        //given 
        board = ['O', 'O', '', 'X', 'X', '', '', '', ''];

        //when
        var result = checkWinCondition(1,4,7,signO);

        //then
        expect(result).toEqual(false);
    });

    it('shouldReturnTrueForSignXWhen3SignsXInLine147', function () {
        //given 
        board = ['X', 'O', 'O', 'X', '', '', 'X', 'O', ''];

        //when
        var result = checkWinCondition(1,4,7,signX);

        //then
        expect(result).toEqual(true);
    });

    it('shouldReturnFalseForSignOWhenNo3SignsXInLine147', function () {
        //given 
        board = ['O', 'O', '', 'X', 'X', 'X', '', '', ''];

        //when
        var result = checkWinCondition(1,4,7,signX);

        //then
        expect(result).toEqual(false);
    });

    it('shouldReturnTrueForSignOWhen3SignsOInLine258', function () {
        //given 
        board = ['O', 'O', 'X', 'X', 'O', '', 'X', 'O', ''];

        //when
        var result = checkWinCondition(2,5,8,signO);

        //then
        expect(result).toEqual(true);
    });

    it('shouldReturnFalseForSignOWhenNo3SignsOInLine258', function () {
        //given 
        board = ['O', 'O', '', 'X', 'X', '', '', '', ''];

        //when
        var result = checkWinCondition(2,5,8,signO);

        //then
        expect(result).toEqual(false);
    });

    it('shouldReturnTrueForSignXWhen3SignsXInLine258', function () {
        //given 
        board = ['O', 'X', 'O', 'O', 'X', '', '', 'X', ''];

        //when
        var result = checkWinCondition(2,5,8,signX);

        //then
        expect(result).toEqual(true);
    });

    it('shouldReturnFalseForSignOWhenNo3SignsXInLine258', function () {
        //given 
        board = ['O', 'O', '', 'X', 'X', 'X', '', '', ''];

        //when
        var result = checkWinCondition(2,5,8,signX);

        //then
        expect(result).toEqual(false);
    });

    it('shouldReturnTrueForSignOWhen3SignsOInLine369', function () {
        //given 
        board = ['O', 'X', 'O', 'X', 'X', 'O', '', '', 'O'];

        //when
        var result = checkWinCondition(3,6,9,signO);

        //then
        expect(result).toEqual(true);
    });

    it('shouldReturnFalseForSignOWhenNo3SignsOInLine369', function () {
        //given 
        board = ['O', 'O', '', 'X', 'X', '', '', '', ''];

        //when
        var result = checkWinCondition(3,6,9,signO);

        //then
        expect(result).toEqual(false);
    });

    it('shouldReturnTrueForSignXWhen3SignsXInLine369', function () {
        //given 
        board = ['X', 'O', 'X', 'O', '', 'X', '', 'O', 'X'];

        //when
        var result = checkWinCondition(3,6,9,signX);

        //then
        expect(result).toEqual(true);
    });

    it('shouldReturnFalseForSignOWhenNo3SignsXInLine369', function () {
        //given 
        board = ['O', 'O', '', 'X', 'X', 'X', '', '', ''];

        //when
        var result = checkWinCondition(3,6,9,signX);

        //then
        expect(result).toEqual(false);
    });

    it('shouldReturnTrueForSignOWhen3SignsOInLine159', function () {
        //given 
        board = ['O', 'X', 'O', 'X', 'O', '', '', '', 'O'];

        //when
        var result = checkWinCondition(1,5,9,signO);

        //then
        expect(result).toEqual(true);
    });

    it('shouldReturnFalseForSignOWhenNo3SignsOInLine159', function () {
        //given 
        board = ['O', 'O', '', 'X', 'X', '', '', '', ''];

        //when
        var result = checkWinCondition(1,5,9,signO);

        //then
        expect(result).toEqual(false);
    });

    it('shouldReturnTrueForSignXWhen3SignsXInLine159', function () {
        //given 
        board = ['X', 'X', 'O', 'O', 'X', '', '', 'O', 'X'];

        //when
        var result = checkWinCondition(1,5,9,signX);

        //then
        expect(result).toEqual(true);
    });

    it('shouldReturnFalseForSignOWhenNo3SignsXInLine159', function () {
        //given 
        board = ['O', 'O', '', 'X', 'X', 'X', '', '', ''];

        //when
        var result = checkWinCondition(1,5,9,signX);

        //then
        expect(result).toEqual(false);
    });

    it('shouldReturnTrueForSignOWhen3SignsOInLine357', function () {
        //given 
        board = ['O', 'X', 'O', 'X', 'O', 'X', 'O', '', ''];

        //when
        var result = checkWinCondition(3,5,7,signO);

        //then
        expect(result).toEqual(true);
    });

    it('shouldReturnFalseForSignOWhenNo3SignsOInLine357', function () {
        //given 
        board = ['O', 'O', '', 'X', 'X', '', '', '', ''];

        //when
        var result = checkWinCondition(3,5,7,signO);

        //then
        expect(result).toEqual(false);
    });

    it('shouldReturnTrueForSignXWhen3SignsXInLine357', function () {
        //given 
        board = ['O', 'O', 'X', 'O', 'X', '', 'X', 'O', ''];

        //when
        var result = checkWinCondition(3,5,7,signX);

        //then
        expect(result).toEqual(true);
    });

    it('shouldReturnFalseForSignOWhenNo3SignsXInLine357', function () {
        //given 
        board = ['O', 'O', '', 'X', 'X', 'X', '', '', ''];

        //when
        var result = checkWinCondition(3,5,7,signX);

        //then
        expect(result).toEqual(false);
    });
});
