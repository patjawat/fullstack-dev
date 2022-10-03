import { Controller, UseGuards, Get, Request } from '@nestjs/common';
import { JwtAuthGuard } from 'src/components/auth/guards/jwt.guard';
import { RolesGuard } from 'src/components/auth/guards/roles.guard';
import { RolesAllowed } from 'src/components/auth/decorators/roles.decorator';
import { Roles } from 'src/components/auth/Roles';


@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {

    @Get('profile')
    @RolesAllowed(Roles.USER)
    getProfile(@Request() req) {
        return req.user;
    }
}
