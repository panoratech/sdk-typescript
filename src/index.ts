import { AuthService } from './services/auth/Auth';
import { ConnectionsService } from './services/connections/Connections';
import { CrmCompaniesService } from './services/crmCompanies/CrmCompanies';
import { CrmContactsService } from './services/crmContacts/CrmContacts';
import { CrmDealsService } from './services/crmDeals/CrmDeals';
import { CrmEngagementsService } from './services/crmEngagements/CrmEngagements';
import { CrmNotesService } from './services/crmNotes/CrmNotes';
import { CrmStagesService } from './services/crmStages/CrmStages';
import { CrmTasksService } from './services/crmTasks/CrmTasks';
import { CrmUsersService } from './services/crmUsers/CrmUsers';
import { EventsService } from './services/events/Events';
import { FieldMappingService } from './services/fieldMapping/FieldMapping';
import { HealthService } from './services/health/Health';
import { LinkedUsersService } from './services/linkedUsers/LinkedUsers';
import { MagicLinkService } from './services/magicLink/MagicLink';
import { MainService } from './services/main/Main';
import { OrganisationsService } from './services/organisations/Organisations';
import { PassthroughService } from './services/passthrough/Passthrough';
import { ProjectsService } from './services/projects/Projects';
import { ProtectedService } from './services/protected/Protected';
import { StytchService } from './services/stytch/Stytch';
import { TicketingAccountsService } from './services/ticketingAccounts/TicketingAccounts';
import { TicketingAttachmentsService } from './services/ticketingAttachments/TicketingAttachments';
import { TicketingCommentsService } from './services/ticketingComments/TicketingComments';
import { TicketingContactsService } from './services/ticketingContacts/TicketingContacts';
import { TicketingTagsService } from './services/ticketingTags/TicketingTags';
import { TicketingTeamsService } from './services/ticketingTeams/TicketingTeams';
import { TicketingTicketsService } from './services/ticketingTickets/TicketingTickets';
import { TicketingUsersService } from './services/ticketingUsers/TicketingUsers';
import { WebhookService } from './services/webhook/Webhook';

export * from './models';

export * as AuthModels from './services/auth';
export * as CrmCompaniesModels from './services/crmCompanies';
export * as CrmContactsModels from './services/crmContacts';
export * as CrmDealsModels from './services/crmDeals';
export * as CrmEngagementsModels from './services/crmEngagements';
export * as CrmNotesModels from './services/crmNotes';
export * as CrmStagesModels from './services/crmStages';
export * as CrmTasksModels from './services/crmTasks';
export * as CrmUsersModels from './services/crmUsers';
export * as FieldMappingModels from './services/fieldMapping';
export * as LinkedUsersModels from './services/linkedUsers';
export * as MagicLinkModels from './services/magicLink';
export * as OrganisationsModels from './services/organisations';
export * as PassthroughModels from './services/passthrough';
export * as ProjectsModels from './services/projects';
export * as TicketingAccountsModels from './services/ticketingAccounts';
export * as TicketingAttachmentsModels from './services/ticketingAttachments';
export * as TicketingCommentsModels from './services/ticketingComments';
export * as TicketingContactsModels from './services/ticketingContacts';
export * as TicketingTagsModels from './services/ticketingTags';
export * as TicketingTeamsModels from './services/ticketingTeams';
export * as TicketingTicketsModels from './services/ticketingTickets';
export * as TicketingUsersModels from './services/ticketingUsers';
export * as WebhookModels from './services/webhook';

type Config = {
  accessToken?: string;
};

export * from './http/errors';

/**
 * The Panora API description
 */
export class PanoraSDK {
  public auth: AuthService;
  public connections: ConnectionsService;
  public crmCompanies: CrmCompaniesService;
  public crmContacts: CrmContactsService;
  public crmDeals: CrmDealsService;
  public crmEngagements: CrmEngagementsService;
  public crmNotes: CrmNotesService;
  public crmStages: CrmStagesService;
  public crmTasks: CrmTasksService;
  public crmUsers: CrmUsersService;
  public events: EventsService;
  public fieldMapping: FieldMappingService;
  public health: HealthService;
  public linkedUsers: LinkedUsersService;
  public magicLink: MagicLinkService;
  public main: MainService;
  public organisations: OrganisationsService;
  public passthrough: PassthroughService;
  public projects: ProjectsService;
  public protected: ProtectedService;
  public stytch: StytchService;
  public ticketingAccounts: TicketingAccountsService;
  public ticketingAttachments: TicketingAttachmentsService;
  public ticketingComments: TicketingCommentsService;
  public ticketingContacts: TicketingContactsService;
  public ticketingTags: TicketingTagsService;
  public ticketingTeams: TicketingTeamsService;
  public ticketingTickets: TicketingTicketsService;
  public ticketingUsers: TicketingUsersService;
  public webhook: WebhookService;

  constructor({ accessToken = '' }: Config) {
    this.auth = new AuthService(accessToken);
    this.connections = new ConnectionsService(accessToken);
    this.crmCompanies = new CrmCompaniesService(accessToken);
    this.crmContacts = new CrmContactsService(accessToken);
    this.crmDeals = new CrmDealsService(accessToken);
    this.crmEngagements = new CrmEngagementsService(accessToken);
    this.crmNotes = new CrmNotesService(accessToken);
    this.crmStages = new CrmStagesService(accessToken);
    this.crmTasks = new CrmTasksService(accessToken);
    this.crmUsers = new CrmUsersService(accessToken);
    this.events = new EventsService(accessToken);
    this.fieldMapping = new FieldMappingService(accessToken);
    this.health = new HealthService(accessToken);
    this.linkedUsers = new LinkedUsersService(accessToken);
    this.magicLink = new MagicLinkService(accessToken);
    this.main = new MainService(accessToken);
    this.organisations = new OrganisationsService(accessToken);
    this.passthrough = new PassthroughService(accessToken);
    this.projects = new ProjectsService(accessToken);
    this.protected = new ProtectedService(accessToken);
    this.stytch = new StytchService(accessToken);
    this.ticketingAccounts = new TicketingAccountsService(accessToken);
    this.ticketingAttachments = new TicketingAttachmentsService(accessToken);
    this.ticketingComments = new TicketingCommentsService(accessToken);
    this.ticketingContacts = new TicketingContactsService(accessToken);
    this.ticketingTags = new TicketingTagsService(accessToken);
    this.ticketingTeams = new TicketingTeamsService(accessToken);
    this.ticketingTickets = new TicketingTicketsService(accessToken);
    this.ticketingUsers = new TicketingUsersService(accessToken);
    this.webhook = new WebhookService(accessToken);
  }

  /**
   * Sets the baseUrl that the SDK will use for its requests.
   * @param {string} url
   */
  setBaseUrl(url: string): void {
    this.auth.setBaseUrl(url);
    this.connections.setBaseUrl(url);
    this.crmCompanies.setBaseUrl(url);
    this.crmContacts.setBaseUrl(url);
    this.crmDeals.setBaseUrl(url);
    this.crmEngagements.setBaseUrl(url);
    this.crmNotes.setBaseUrl(url);
    this.crmStages.setBaseUrl(url);
    this.crmTasks.setBaseUrl(url);
    this.crmUsers.setBaseUrl(url);
    this.events.setBaseUrl(url);
    this.fieldMapping.setBaseUrl(url);
    this.health.setBaseUrl(url);
    this.linkedUsers.setBaseUrl(url);
    this.magicLink.setBaseUrl(url);
    this.main.setBaseUrl(url);
    this.organisations.setBaseUrl(url);
    this.passthrough.setBaseUrl(url);
    this.projects.setBaseUrl(url);
    this.protected.setBaseUrl(url);
    this.stytch.setBaseUrl(url);
    this.ticketingAccounts.setBaseUrl(url);
    this.ticketingAttachments.setBaseUrl(url);
    this.ticketingComments.setBaseUrl(url);
    this.ticketingContacts.setBaseUrl(url);
    this.ticketingTags.setBaseUrl(url);
    this.ticketingTeams.setBaseUrl(url);
    this.ticketingTickets.setBaseUrl(url);
    this.ticketingUsers.setBaseUrl(url);
    this.webhook.setBaseUrl(url);
  }

  /**
   * Sets the access token used to authenticate.
   * @param {string} accessToken
   */
  setAccessToken(accessToken: string) {
    this.auth.setAccessToken(accessToken);
    this.connections.setAccessToken(accessToken);
    this.crmCompanies.setAccessToken(accessToken);
    this.crmContacts.setAccessToken(accessToken);
    this.crmDeals.setAccessToken(accessToken);
    this.crmEngagements.setAccessToken(accessToken);
    this.crmNotes.setAccessToken(accessToken);
    this.crmStages.setAccessToken(accessToken);
    this.crmTasks.setAccessToken(accessToken);
    this.crmUsers.setAccessToken(accessToken);
    this.events.setAccessToken(accessToken);
    this.fieldMapping.setAccessToken(accessToken);
    this.health.setAccessToken(accessToken);
    this.linkedUsers.setAccessToken(accessToken);
    this.magicLink.setAccessToken(accessToken);
    this.main.setAccessToken(accessToken);
    this.organisations.setAccessToken(accessToken);
    this.passthrough.setAccessToken(accessToken);
    this.projects.setAccessToken(accessToken);
    this.protected.setAccessToken(accessToken);
    this.stytch.setAccessToken(accessToken);
    this.ticketingAccounts.setAccessToken(accessToken);
    this.ticketingAttachments.setAccessToken(accessToken);
    this.ticketingComments.setAccessToken(accessToken);
    this.ticketingContacts.setAccessToken(accessToken);
    this.ticketingTags.setAccessToken(accessToken);
    this.ticketingTeams.setAccessToken(accessToken);
    this.ticketingTickets.setAccessToken(accessToken);
    this.ticketingUsers.setAccessToken(accessToken);
    this.webhook.setAccessToken(accessToken);
  }
}
