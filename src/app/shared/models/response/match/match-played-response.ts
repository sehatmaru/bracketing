export class MatchPlayedResponse {
    public winner: TeamMatchPlayedResponse = new TeamMatchPlayedResponse()
}

export class TeamMatchPlayedResponse {
    public id = 0
    public name = ''
    public number = 0
}