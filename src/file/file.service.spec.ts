import { Test, TestingModule } from '@nestjs/testing';
import { FileService } from './file.service';
import { getPhoto } from '../testing/get-photo.mock';

describe('FileService', () => {
  let fileService: FileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileService],
    }).compile();

    fileService = module.get<FileService>(FileService);
  });

  test('Validate the definition', () => {
    expect(fileService).toBeDefined();
  });

  describe('File Service Test', () => {
    test('upload method', async () => {
      const photo = await getPhoto();
      const filename = 'photo-test.png';
      fileService.upload(photo, filename);
    });
  });
});
