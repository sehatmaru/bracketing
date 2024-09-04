import { GroupStatus } from "src/app/shared/enum/group-status.enum"

export class TournamentListResponse {
    public id = 0
    public name = ''
    public host = ''
    public status: GroupStatus = GroupStatus.WAITING
    public createdAt = new Date()
}