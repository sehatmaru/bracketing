import { MatchStage } from "src/app/shared/enum/match-stage.enum"
import { TournamentFormat } from "src/app/shared/enum/tournament-format.enum"
import { TournamentStatus } from "src/app/shared/enum/tournament-status.enum"
import { GroupDetailResponse } from "./group-detail-response"

export class TournamentDetailResponse {
    public id = 0
    public name = ''
    public host = ''
    public description = ''
    public url = ''
    public format: TournamentFormat = TournamentFormat.KNOCKOUT
    public participants = 0
    public groupParticipants = 0
    public groupAdvanceParticipants = 0
    public isThirdPlace = false
    public stage: MatchStage = MatchStage.OTHER
    public status: TournamentStatus = TournamentStatus.WAITING
    public teams: TeamTournamentDetail[] = []
    public createdAt = new Date()
    public startedAt = new Date()
    public endAt = new Date()
}

export class TeamTournamentDetail {
    public id = 0
    public groupId = 0
    public name = ''
    public captain = ''
    public number = 0
    public isLost = false
}