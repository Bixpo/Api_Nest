import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { PrismaModule } from 'src/prisma/primsa.module';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({
      secret: '%vS6RQuaCm@hGn1X@Lp5AFjczUkCxX(',
    }),
    UserModule,
    PrismaModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
