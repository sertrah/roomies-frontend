import type { IRoomies } from "../../layer-application/entities/roomies"
import { RoomiesMapper, type IRoomiesDTO } from "../Mappers/roomiesDTO";

export const roomiesRepository = {
    getHomeById: async (id: string): Promise<IRoomies> => {
        return ({ fullName: '', id: '' })
    }
}