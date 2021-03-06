import {IDateRangeFilter} from './date-range-filter';
import {IDictionaryItem} from './dictionary-item';
import {IDurationFilter} from './duration-filter';
import {IExcludeCallsAbandoned} from './exclude-calls-abandoned';
import {IExtensionFilter} from './extension-filter';
import {IGraphPeriodFilter} from './graph-period';
import {IMainReportParams} from './main-report-params';
import {INumberFilter} from './number-filter';
import {IQueueItem} from './queue-item';
import {IReportScheduleParams} from './report-schedule-params';
import {ITrunkFilter} from './trunks-filter';
import {IUserFilterFilter} from './user-filter';

export type CallState =
    'All' |
    'OnlyAnswered' |
    'OnlyUnanswered';

export type callsTo =
    'All' |
    'National' |
    'Mobile';

export interface IReport {
    CallArea: string;
    CallState: CallState;
    CallsTo: callsTo;
    DateRangeFilter: IDateRangeFilter;
    DurationFilter: IDurationFilter;
    ExcludeCallsAbandonedBefore: IExcludeCallsAbandoned;
    ExtensionGroupFilter: IDictionaryItem[];
    ExtensionListFilter: IDictionaryItem[];
    GraphPeriod: IGraphPeriodFilter;
    HidePCalls: boolean;
    IncludeInternalCalls: boolean;
    IncludeQueueCalls: boolean;
    MainParams: IMainReportParams;
    NumberFilterFrom: INumberFilter;
    NumberFilterTo: INumberFilter;
    Queue: IQueueItem;
    QueueAgents: IDictionaryItem[];
    QueueListFilter: IDictionaryItem[];
    RingGroupListFilter: IDictionaryItem[];
    SearchText: string;
    ScheduleParams: IReportScheduleParams;
    ServicedAfter: number;
    TimeZoneName: string;
    UserFilter: IUserFilterFilter;
    isStandard: boolean;
    licenseRestricted: boolean;
    ExtensionsFilter: IExtensionFilter;
    CultureName?: string;
    TrunkListFilter: ITrunkFilter[];
    ExcludeCallsWaitingLess: IExcludeCallsAbandoned;
}
