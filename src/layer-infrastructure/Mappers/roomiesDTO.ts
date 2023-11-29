import type { IRoomies } from "../../layer-application/entities/roomies"

export interface IRoomiesDTO {
    id: string;
    name: string;
}

export const RoomiesMapper = ({ id, name }: IRoomiesDTO):  IRoomies => ({
    fullName: name,
    id
})