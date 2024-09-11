import { TournamentFormat } from "../../../enum/tournament-format.enum"

export class CreateTournamentRequest {
    public name = ''
    public host = ''
    public description = ''
    public url = ''
    public format: TournamentFormat = TournamentFormat.KNOCKOUT
    public isHomeAway = ''
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
