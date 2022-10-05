import { Body, Controller, Delete, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt/jwt-auth.guard';
import { LocalAuthGuard } from './local/local-auth.guard';
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    
    @UseGuards(LocalAuthGuard)
    @Post('signin')
    async signIn(@Request() req: any): Promise<any> {
        return this.authService.signIn(req.user)
        // return req.user;
    }
    // @Get('/logout')
    // logout(@Request() req): any {
    //   req.session.destroy();
    //   return { msg: 'The user session has ended' }
    // }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req: any) {
        return req.user
    }

}
