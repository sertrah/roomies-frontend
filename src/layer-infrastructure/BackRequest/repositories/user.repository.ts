import { http } from "../http";
import type { DemoDTO } from "../DTOs/demo.dto";
import type { IDemo } from "../../../layer-application/entities/demo";
import { userDTOMapper } from "../mappers/user";


const userUrl= 'user';

export const userRepository = {
    signUp: async (body: any): Promise<any> => {
        return await http
            .post<DemoDTO>(`${userUrl}/signup`, body)
            .then((userDTO) => {
                return userDTOMapper.signUp(userDTO)
            });
    },
};