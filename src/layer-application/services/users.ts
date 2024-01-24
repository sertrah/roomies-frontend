import { userRepository } from "../../layer-infrastructure/BackRequest/repositories/user.repository";

export const usersService = {
    signUp: function(formData: any) {
        return userRepository.signUp(formData);
    },
}