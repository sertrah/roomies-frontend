import { http } from "../http";
import type { DemoDTO } from "../DTOs/demo.dto";
import type { IDemo } from "../../../layer-application/entities/demo";
import { demoDTOMapper } from "../mappers/demo";

export const demoRepository = {
    getById: async (id: string): Promise<IDemo> => {
        return await http
            .get<DemoDTO>(`products/${id}`)
            .then((ProductDTO) => {
                return demoDTOMapper(ProductDTO)
            });
    },
};