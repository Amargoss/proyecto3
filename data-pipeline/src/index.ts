import cron from 'node-cron';
import { logger } from './utils/logger';
import { UserAnalyticsExtractor } from './extractors/UserAnalyticsExtractor';
import { DataTransformer } from './transformers/DataTransformer';
import { ReportsLoader } from './loaders/ReportsLoader';

class DataPipeline {
  private analyticsExtractor: UserAnalyticsExtractor;
  private dataTransformer: DataTransformer;
  private reportsLoader: ReportsLoader;

  constructor() {
    this.analyticsExtractor = new UserAnalyticsExtractor();
    this.dataTransformer = new DataTransformer();
    this.reportsLoader = new ReportsLoader();
  }

  async start() {
    logger.info('🚀 Data Pipeline service started');

    // Run daily analytics processing at 2 AM
    cron.schedule('0 2 * * *', async () => {
      await this.processDailyAnalytics();
    });

    // Run hourly metrics calculation
    cron.schedule('0 * * * *', async () => {
      await this.processHourlyMetrics();
    });

    // Run weekly reports on Sundays at 3 AM
    cron.schedule('0 3 * * 0', async () => {
      await this.generateWeeklyReports();
    });

    logger.info('📅 Scheduled jobs configured');
  }

  private async processDailyAnalytics() {
    try {
      logger.info('🔄 Processing daily analytics...');
      
      // Extract user analytics data
      const analyticsData = await this.analyticsExtractor.extractDailyData();
      
      // Transform data
      const transformedData = await this.dataTransformer.transformAnalytics(analyticsData);
      
      // Load into reporting tables
      await this.reportsLoader.loadDailyAnalytics(transformedData);
      
      logger.info('✅ Daily analytics processing completed');
    } catch (error) {
      logger.error('❌ Error processing daily analytics:', error);
    }
  }

  private async processHourlyMetrics() {
    try {
      logger.info('🔄 Processing hourly metrics...');
      
      // Extract recent user activity
      const activityData = await this.analyticsExtractor.extractHourlyData();
      
      // Calculate metrics
      const metrics = await this.dataTransformer.calculateMetrics(activityData);
      
      // Update real-time metrics
      await this.reportsLoader.updateMetrics(metrics);
      
      logger.info('✅ Hourly metrics processing completed');
    } catch (error) {
      logger.error('❌ Error processing hourly metrics:', error);
    }
  }

  private async generateWeeklyReports() {
    try {
      logger.info('🔄 Generating weekly reports...');
      
      // Extract weekly data
      const weeklyData = await this.analyticsExtractor.extractWeeklyData();
      
      // Generate reports
      const reports = await this.dataTransformer.generateReports(weeklyData);
      
      // Save reports
      await this.reportsLoader.saveReports(reports);
      
      logger.info('✅ Weekly reports generation completed');
    } catch (error) {
      logger.error('❌ Error generating weekly reports:', error);
    }
  }
}

// Start the data pipeline
const pipeline = new DataPipeline();
pipeline.start().catch((error) => {
  logger.error('Failed to start data pipeline:', error);
  process.exit(1);
});