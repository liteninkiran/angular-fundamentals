import { of } from "rxjs";
import { ISession } from "../shared/event.model";
import { VoterService } from "./voter.service";

describe('VoterService', () =>
{

    let voterService:VoterService
    let mockHttp;

    beforeEach(() =>
    {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
        voterService = new VoterService(mockHttp);
    });

    // Delete Voter
    describe('deleteVoter', () =>
    {
        it('should remove the voter from the list of voters', () =>
        {
            // Create a dummy session object
            var session =
            {
                id: 6,
                voters: ['Joe', 'John'],
            };

            // Tell post to return an observable
            mockHttp.delete.and.returnValue(of(false));

            // Pretend to delete "Joe" from the session.voter object
            voterService.deleteVoter(3, <ISession>session, 'Joe');

            // Make assertions
            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe('John');
        });

        it('should call http.delete with the right URL', () =>
        {
            // Create a dummy session object
            var session =
            {
                id: 6,
                voters: ['Joe', 'John'],
            };

            // Tell post to return an observable
            mockHttp.delete.and.returnValue(of(false));

            // Pretend to delete "Joe" from the session.voter object
            voterService.deleteVoter(3, <ISession>session, 'Joe');

            // Make assertions
            expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/Joe');

        });

    });

    // Add Voter
    describe('addVoter', () =>
    {
        it('should call http.post with the right URL', () =>
        {
            // Create a dummy session object
            var session =
            {
                id: 6,
                voters: ['John'],
            };

            // Tell post to return an observable
            mockHttp.post.and.returnValue(of(false));

            // Pretend to add "Joe" to the session.voter object
            voterService.addVoter(3, <ISession>session, 'Joe');

            // Make assertions
            expect(mockHttp.post).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/Joe', {}, jasmine.any(Object));
        });
    });
});
