import { EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
export declare class LongPressDirective implements OnDestroy {
    pressEnabled: boolean;
    pressModel: any;
    duration: number;
    longPressStart: EventEmitter<any>;
    longPressing: EventEmitter<any>;
    longPressEnd: EventEmitter<any>;
    pressing: boolean;
    isLongPressing: boolean;
    timeout: any;
    mouseX: number;
    mouseY: number;
    subscription: Subscription;
    readonly press: boolean;
    readonly isLongPress: boolean;
    onMouseDown(event: MouseEvent | TouchEvent): void;
    onMouseMove(event: MouseEvent | TouchEvent): void;
    loop(event: MouseEvent | TouchEvent): void;
    endPress(): void;
    onMouseup(): void;
    ngOnDestroy(): void;
    private _destroySubscription;
}
