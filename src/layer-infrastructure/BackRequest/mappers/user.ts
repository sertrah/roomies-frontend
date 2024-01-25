import type { DemoDTO } from "../DTOs/demo.dto";
import type { IDemo } from "../../../layer-application/entities/demo";

export const userDTOMapper = {
    signUp: function (demoDTO: any) {
        return ({
            id: `${demoDTO.id}`,
            name: demoDTO.brand,
        });
    }
}