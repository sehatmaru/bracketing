import { MatchStage } from "../../../enum/match-stage.enum"
import { MatchStatus } from "../../../enum/match-status.enum"

export class MatchResponse {
    public id = 0
    public stage: MatchStage = MatchStage.OTHER
    public teamA: TeamMatchResponse = new TeamMatchResponse()
    public teamB: TeamMatchResponse = new TeamMatchResponse()
    public winner = 0
    public status: MatchStatus = MatchStatus.WAITING
    public endAt = new Date()
}

class TeamMatchResponse {
    public id = 0
    public name = ''
    public number = 0
    public score = 0
    public isWinner = false
}