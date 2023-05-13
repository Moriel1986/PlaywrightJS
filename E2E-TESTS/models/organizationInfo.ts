export interface OrganizationInfo {
    organizationType: string,
    name: string,
    programs?: string[]
    designationType?: string,
    iaPricingGeneration?: string,
    iaMarginBook?: string,
    iaMarginCourseware?: string,
    fulfillmentPriceType?: string
}


export enum OrganizationNames {
    PublisherOrg = 'The Goodheart Willcox Company', 
    BookstoreOrg = 'University of Illinois Bookstore',
    RedShelfAdmin = 'Redshelf',
    QATestOrg = 'RedShelfQA'
    
}

export enum OrganizationRoles {
    PublisherAdministrator = 'Publishing House Administrator',
    PublisherUser = 'Publishing House User',
    BookstoreAdministrator = 'University Administrator',
    BookstoreSubmitter = 'University Submitter',
    BookstoreReviewer = 'University Reviewer',
    RedShelfAdmin = 'RedShelf Administrator'
    
}


