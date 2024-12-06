import { TestBed } from '@angular/core/testing';
import { MessageService } from 'primeng/api';
import { ToastService } from './toast.service';

describe('ToastService', () => {
  let service: ToastService;
  let messageServiceMock: jasmine.SpyObj<MessageService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ToastService,
        {
          provide: MessageService,
          useValue: jasmine.createSpyObj('MessageService', ['add', 'clear']),
        },
      ],
    });

    service = TestBed.inject(ToastService);
    messageServiceMock = TestBed.inject(MessageService) as jasmine.SpyObj<MessageService>;
  });

  it('should show success message', () => {
    service.showSuccess('Success', 'Success message');
    expect(messageServiceMock.add).toHaveBeenCalledWith({ severity: 'success', summary: 'Success', detail: 'Success message' });
  });

  it('should show error message', () => {
    service.showError('error', 'Error message');
    expect(messageServiceMock.add).toHaveBeenCalledWith({ severity: 'error', summary: 'error', detail: 'Error message' });
  });

  it('should show info message', () => {
    service.showInfo('info', 'info message');
    expect(messageServiceMock.add).toHaveBeenCalledWith({ severity: 'info', summary: 'info', detail: 'info message' });
  });

  it('should show warn message', () => {
    service.showWarn('warn', 'warn message');
    expect(messageServiceMock.add).toHaveBeenCalledWith({ severity: 'warn', summary: 'warn', detail: 'warn message' });
  });

  it('should show custom message', () => {
    service.showCustom('Custom', 'Custom message', 'custom');
    expect(messageServiceMock.add).toHaveBeenCalledWith({ severity: 'custom', summary: 'Custom', detail: 'Custom message' });
  });

  it('should clear messages', () => {
    service.clear();
    expect(messageServiceMock.clear).toHaveBeenCalled();
  });
});