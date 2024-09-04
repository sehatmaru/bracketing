import { TournamentFormat } from "../../../enum/tournament-format.enum"
import { TournamentType } from "../../../enum/tournament-type.enum"

export class CreateTournamentRequest {
    public name = ''
    public host = ''
    public description = ''
    public url = ''
    public format: TournamentFormat = TournamentFormat.SINGLE_ELIMINATION
    public type: TournamentType = TournamentType.SINGLE_STAGE
    public isThirdPlace = ''
    public isRandomize = false
    public teams: TeamRequest[] = []
    public groupSetting: GroupSettingRequest = new GroupSettingRequest()

    constructor() {
    }
}

export class TeamRequest {
    public name = ''
    public captain = ''
}

export class GroupSettingRequest {
    public groupParticipants = 0
    public groupAdvanceParticipants = 0
}
