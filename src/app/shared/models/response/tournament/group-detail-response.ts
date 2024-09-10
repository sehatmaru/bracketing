import { GroupStatus } from "src/app/shared/enum/group-status.enum"

export class GroupDetailResponse {
    public id = 0
    public name = ''
    public tournamentId = 0
    public teams: TeamGroupResponse[] = []
    public status: GroupStatus = GroupStatus.WAITING
    public startedAt = new Date()
    public endedAt = new Date()
}

class TeamGroupResponse {
    public id = 0
    public name = ''
    public number = 0
    public score = 0
    public played = 0
    public wins = 0
    public loses = 0
    public draws = 0
    public point = 0
}