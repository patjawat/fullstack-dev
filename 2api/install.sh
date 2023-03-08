#npm install --save @nestjs/passport @nestjs/jwt passport passport-local passport-jwt && 
#npm install --save-dev @types/passport-local @types/passport-jwt &&
#npx @nestjs/cli g module auth &&
#npx @nestjs/cli g module users &&
#npx @nestjs/cli g service auth &&
#npx @nestjs/cli g service users &&
mkdir -p src/model
touch src/model/role.enum.ts && touch src/model/user.entity.ts &&
#echo role.enum.ts >>> export enum Role {
#  User = 'user',
#  Admin = 'admin',
#}

bash -c 'echo "export enum Role {
  User = 'user',
  Admin = 'admin',
}" > src/model/role.enum.ts'


bash -c 'echo "export const jwtConstants = {
  secret: '"'secretKey'"',
};" > src/auth/constants.ts'



bash -c 'echo "import { Role } from '"'./role.enum'"';

export interface User {
    userId: number;
    username: string;
    password: string;
    roles: Role[];
}" > src/model/user.entity.ts'

bash -c 'echo "import { Injectable } from '"'@nestjs/common'"';
import { User } from '"'../model/user.entity'"';
import { Role } from '"'../model/role.enum'"';

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: '"'anna'"',
            password: '"'2345'"',
            roles: [Role.User],
        },
        {
            userId: 2,
            username: '"'andrew'"',
            password: '"'54321'"',
            roles: [Role.Admin],
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find((user) => user.username === username);
    }
}" > src/users/users.service.ts';

bash -c 'echo "import { Module } from '"'@nestjs/common'"';
import { UsersService } from '"'./users.service'"';

@Module({
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}" > src/users/users.module.ts';

# auth.service
bash -c 'echo "import { Injectable } from '"'@nestjs/common'"';
import { UsersService } from '"'../users/users.service'"';
import { JwtService } from '"'@nestjs/jwt'"';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = {
      username: user.username,
      sub: user.userId,
      roles: user.roles,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}" > src/auth/auth.service.ts';

bash -c 'echo "import { Strategy } from '"'passport-local'"';
import { PassportStrategy } from '"'@nestjs/passport'"';
import { Injectable, UnauthorizedException } from '"'@nestjs/common'"';
import { AuthService } from '"'./auth.service'"';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}" > src/auth/local.strategy.ts' ;

bash -c 'echo "import { Module } from '"'@nestjs/common'"';
import { AuthService } from '"'./auth.service'"';
import { UsersModule } from '"'../users/users.module'"';
import { PassportModule } from '"'@nestjs/passport'"';
import { LocalStrategy } from '"'./local.strategy'"';

@Module({
    imports: [UsersModule, PassportModule],
    providers: [AuthService, LocalStrategy],
})
export class AuthModule {}" > src/auth/auth.module.ts';