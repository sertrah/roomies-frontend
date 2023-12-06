import type { DemoDTO } from "../DTOs/demo.dto";
import type { IDemo } from "../../../layer-application/entities/demo";

export const demoDTOMapper = (demoDTO: DemoDTO): IDemo => ({
    id: `${demoDTO.id}`,
    name: demoDTO.brand,
});