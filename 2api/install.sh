npm install --save @nestjs/passport @nestjs/jwt passport passport-local passport-jwt && 
npm install --save-dev @types/passport-local @types/passport-jwt &&
npx @nestjs/cli g module auth &&
npx @nestjs/cli g module users &&
npx @nestjs/cli g service auth &&
npx @nestjs/cli g service users
