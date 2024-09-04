export class MatchScoreRequest {
    public teamA: TeamMatchScoreRequest = new TeamMatchScoreRequest()
    public teamB: TeamMatchScoreRequest = new TeamMatchScoreRequest()
}

export class TeamMatchScoreRequest {
    public score = 0
    public isWinner = false
}
