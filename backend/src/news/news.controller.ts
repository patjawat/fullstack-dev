import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
// import { ApiTags } from '@nestjs/swagger';
import { CreateNewsDto } from "./dto/create-news.dto";
import { News } from "./news.entity";
import { NewsService } from "./news.service";
import { JwtAuthGuard } from 'src/components/auth/guards/jwt.guard';
import { RolesGuard } from 'src/components/auth/guards/roles.guard';
import { RolesAllowed } from 'src/components/auth/decorators/roles.decorator';
import { Roles } from 'src/components/auth/Roles';

// @ApiTags("News")
@Controller('news')
@UseGuards(JwtAuthGuard, RolesGuard)
export class NewsController {

    constructor(private readonly newsService: NewsService) {}

    @Post()
    @RolesAllowed(Roles.ADMIN)
    create(@Body() createNewsDto: CreateNewsDto): Promise<News> {
        return this.newsService.create(createNewsDto);
    }

    @Get()
    @RolesAllowed(Roles.ADMIN, Roles.USER)
    findAll(): Promise<News[]> {
        return this.newsService.findAll();
    }

    @Get(':id')
    @RolesAllowed(Roles.ADMIN, Roles.USER)
    findOne(@Param('id') id: string): Promise<News> {
        return this.newsService.findOne(id);
    }

    @Delete(':id')
    @RolesAllowed(Roles.ADMIN)
    remove(@Param('id') id: string): Promise<void> {
        return this.newsService.remove(id);
    }
}
