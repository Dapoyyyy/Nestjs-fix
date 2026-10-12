import { Body, Controller, Get,Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service.js';
import { get } from 'http';
import { agent } from 'supertest';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(`greeting/:name`)
  getGreeting(@Param('name')name: string ): string {
    return this.appService.getGreeting(name);
  }
   @Get('AgeCategory/:age')
  getAgeCategory(@Param('age') age: string) : string{
   const ageNumber = parseInt(age,12);
   if(isNaN(ageNumber)) {
    return `Invalid age`;
   }
   return this.appService.getAgeCategory(Number(age));
  }

  
  @Get('bmi')
  getBMI(@Query('weight') weight: string, @Query('height') height: string): string {
    const weightNumber = parseFloat(weight);
    const heightNumber = parseFloat(height);
    if (isNaN(weightNumber) || isNaN(heightNumber)) {
      return 'Invalid input';
    }
    return this.appService.getBMI(weightNumber, heightNumber);
  }
  @Post('luas-balok')
  countLuasbalok(@Body('panjang') panjang: number, @Body('lebar') lebar: number): number {
    return this.appService.countLuasbalok(panjang, lebar);
  }
// soal 1
@Get('bilangan/:angka')
getBilangan(@Param('angka') angka: string) {
  return this.appService.getBilangan(Number(angka));
}

// soal 2
@Get('suhu/konversi')
konversiSuhu(
  @Query('nilai') nilai: string,
  @Query('dari') dari: string,
  @Query('ke') ke: string
) {
  return this.appService.konversiSuhu(
    Number(nilai),
    dari,
    ke
  );
}
// soal 3
// saya mengerjakan tugas tantangan

@Get('deret/:jenis')
getDeret(
  @Param('jenis') jenis: string,
  @Query('jumlah') jumlah: string,
  @Query('urutan') urutan: string
) {
  return this.appService.getDeret(
    jenis,
    Number(jumlah),
    urutan
  );
}
// soal 4
// saya tidak mengerjakan tugas tantangan

@Post('nilai/hitung')
hitungNilai(@Body() data: any) {
  return this.appService.hitungNilai(data);
}

// soal 5

@Post('kasir/checkout/:member')
checkout(
  @Param('member') member: string,
  @Query('metode') metode: string,
  @Body('items') items: any[]
) {
  return this.appService.checkout(
    member,
    metode,
    items
  );
}

}