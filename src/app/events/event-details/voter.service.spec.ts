import { of } from "rxjs";
import { ISession } from "../shared/event.model";
import { VoterService } from "./voter.service";

describe('VoterService', () =>
{

    let voterService: VoterService, mockHttp;

    beforeEach(() =>
    {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
        voterService = new VoterService(mockHttp);
    });

    describe('deleteVoter', () =>
    {
        it('should remove the voter from the list of voters', () =>
        {
            var session =
            {
                id: 6,
                voters: ['Joe', 'John'],
            };

            mockHttp.delete.and.returnValue(of(false));

            voterService.deleteVoter(3, <ISession>session, 'Joe');

            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe('John');
        })
    });

});
